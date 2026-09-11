import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, BookOpen, Globe, Award, Users, HelpCircle } from 'lucide-react';
import services from '../../content/services.json';
import countries from '../../content/countries.json';
import coaching from '../../content/coaching.json';
import blogs from '../../content/blogs.json';
import team from '../../content/team.json';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const searchableItems = useMemo(() => {
    const items = [];

    // Services
    services.forEach((s) => {
      items.push({
        title: s.title,
        desc: s.shortDescription,
        category: 'Visa Service',
        path: `/service-details/${s.slug}`,
        icon: Globe,
      });
    });

    // Countries
    countries.forEach((c) => {
      items.push({
        title: `${c.name} Immigration & Study`,
        desc: c.tagline,
        category: 'Country',
        path: `/countries/${c.slug}`,
        icon: Globe,
      });
    });

    // Coaching Courses
    coaching.courses.forEach((cr) => {
      items.push({
        title: cr.title,
        desc: cr.tagline,
        category: 'Coaching Course',
        path: `/project-details/${cr.slug}`,
        icon: Award,
      });
    });

    // Blogs
    blogs.forEach((b) => {
      items.push({
        title: b.title,
        desc: b.excerpt,
        category: 'Blog Article',
        path: `/blog/${b.slug}`,
        icon: BookOpen,
      });
    });

    // Team
    team.forEach((t) => {
      items.push({
        title: t.name,
        desc: `${t.role} - ${t.experience} Experience`,
        category: 'Team Member',
        path: `/team-details/${t.slug}`,
        icon: Users,
      });
    });

    return items;
  }, []);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchableItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query, searchableItems]);

  if (!isOpen) return null;

  const handleSelect = (path) => {
    onClose();
    setQuery('');
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex items-start justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Search Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-gray-100 animate-fadeIn">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 sm:px-6 py-4 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search visa services, countries, IELTS coaching, team..."
            className="w-full bg-transparent text-theme-heading text-base placeholder-gray-400 focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-gray-600 mr-2 text-xs font-semibold px-2 py-1 bg-gray-100 rounded"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
            aria-label="Close search"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto p-4 sm:p-6 space-y-2">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-gray-500">
              <p className="text-sm">Type keywords like "Student Visa", "Canada", "IELTS", "About" to search...</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['Student Visa', 'Canada', 'United Kingdom', 'IELTS', 'Team', 'Contact'].map((sug) => (
                  <button
                    key={sug}
                    type="button"
                    onClick={() => setQuery(sug)}
                    className="text-xs bg-gray-100 hover:bg-theme-primary hover:text-white px-3 py-1.5 rounded-full transition-colors"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelect(item.path)}
                  className="p-3.5 hover:bg-red-50/50 rounded-xl transition-all cursor-pointer border border-transparent hover:border-red-100 flex items-center justify-between group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 group-hover:bg-theme-primary group-hover:text-white text-gray-700 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-theme-heading group-hover:text-theme-primary transition-colors">
                          {item.title}
                        </h4>
                        <span className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-theme-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p className="text-sm font-medium text-gray-700">No results found for "{query}"</p>
              <p className="text-xs text-gray-400 mt-1">Try checking for spelling errors or searching general topics.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
