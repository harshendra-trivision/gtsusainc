'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Search, X } from 'lucide-react';
import { primaryNavigation } from '../navigation';
import { cn } from '@/components/ui';

interface SearchEntry {
  label: string;
  /** Where the entry lives in the site, shown under the label (e.g. "Industries › Energy & Process Industries"). */
  context: string;
  href: string;
}

const MAX_RESULTS = 8;

// Flattens the header navigation (pages, submenus, mega menu categories and their items) into one searchable list.
function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];
  const seen = new Set<string>();

  const add = (entry: SearchEntry) => {
    const key = `${entry.label}|${entry.href}`;
    if (seen.has(key)) return;
    seen.add(key);
    entries.push(entry);
  };

  for (const item of primaryNavigation) {
    add({ label: item.label, context: 'Page', href: item.href });

    item.submenu?.forEach((sub) => add({ label: sub.label, context: item.label, href: sub.href }));

    item.megaMenu?.forEach((category) => {
      const categoryHref = item.megaMenuLinkTo ? `${item.megaMenuLinkTo}#${category.slug}` : item.href;
      add({ label: category.label, context: item.label, href: categoryHref });

      category.groups.forEach((group) =>
        group.items.forEach((label) =>
          add({ label, context: `${item.label} › ${category.label}`, href: categoryHref })
        )
      );
    });
  }

  return entries;
}

// The navigation is static, so the index is built once at module load.
const SEARCH_INDEX = buildSearchIndex();

function scoreEntry(entry: SearchEntry, terms: string[]) {
  const label = entry.label.toLowerCase();
  const haystack = `${label} ${entry.context.toLowerCase()}`;
  if (!terms.every((term) => haystack.includes(term))) return 0;

  const query = terms.join(' ');
  if (label === query) return 4;
  if (label.startsWith(query)) return 3;
  if (terms.every((term) => label.includes(term))) return 2;
  return 1;
}

interface HeaderSearchProps {
  isScrolled: boolean;
  useLightText: boolean;
}

export default function HeaderSearch({ isScrolled, useLightText }: HeaderSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [highlighted, setHighlighted] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (terms.length === 0) return [];

    return SEARCH_INDEX
      .map((entry) => ({ entry, score: scoreEntry(entry, terms) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_RESULTS)
      .map(({ entry }) => entry);
  }, [query]);

  const close = () => {
    setIsOpen(false);
    setQuery('');
    setHighlighted(0);
  };

  const goTo = (entry: SearchEntry) => {
    close();
    router.push(entry.href);
  };

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // Ctrl/Cmd + K opens search from anywhere; clicking outside closes it.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsOpen(true);
      }
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, []);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      close();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlighted((index) => (results.length ? (index + 1) % results.length : 0));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setHighlighted((index) => (results.length ? (index - 1 + results.length) % results.length : 0));
    } else if (event.key === 'Enter' && results[highlighted]) {
      event.preventDefault();
      goTo(results[highlighted]);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => (isOpen ? close() : setIsOpen(true))}
        className={cn(
          'flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition-colors',
          isScrolled
            ? 'border-slate-200/80 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600'
            : useLightText
              ? 'border-white/25 bg-white/10 text-white hover:border-cyan-200/50 hover:bg-white/20 hover:text-cyan-200'
              : 'border-slate-300/80 bg-white/80 text-slate-700 hover:border-blue-300 hover:bg-white hover:text-blue-600'
        )}
        aria-label="Search the site"
        aria-expanded={isOpen}
      >
        <Search className="h-4 w-4" />
        <span>Search</span>
        <kbd className="hidden rounded border border-current/20 px-1 font-mono text-[10px] opacity-60 min-[1440px]:inline">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute right-0 top-full z-[90] mt-3 w-[400px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.18)]"
          >
            <div className="flex items-center gap-2 border-b border-slate-100 px-4">
              <Search className="h-4 w-4 shrink-0 text-slate-400" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setHighlighted(0);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder="Search services, industries, projects…"
                className="h-12 w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
                aria-label="Search query"
              />
              <button
                type="button"
                onClick={close}
                className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {query.trim() === '' ? (
              <p className="px-4 py-5 text-xs text-slate-500">Type to search pages, solutions, industries and more.</p>
            ) : results.length === 0 ? (
              <p className="px-4 py-5 text-xs text-slate-500">
                No results for <span className="font-semibold text-slate-700">“{query}”</span>
              </p>
            ) : (
              <ul className="max-h-[60vh] overflow-y-auto overscroll-contain p-2" role="listbox">
                {results.map((entry, index) => (
                  <li key={`${entry.label}|${entry.href}`} role="option" aria-selected={index === highlighted}>
                    <button
                      type="button"
                      onClick={() => goTo(entry)}
                      onMouseEnter={() => setHighlighted(index)}
                      className={cn(
                        'group flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors',
                        index === highlighted ? 'bg-blue-50' : 'hover:bg-slate-50'
                      )}
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-slate-900">{entry.label}</span>
                        <span className="block truncate text-[11px] text-slate-500">{entry.context}</span>
                      </span>
                      <ArrowRight
                        className={cn(
                          'h-4 w-4 shrink-0 transition-all',
                          index === highlighted ? 'translate-x-0 text-blue-600 opacity-100' : '-translate-x-1 opacity-0'
                        )}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
