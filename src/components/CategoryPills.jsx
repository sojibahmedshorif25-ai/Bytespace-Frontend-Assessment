import React from 'react';
import { categories } from '../data/coursesData';
import { useCourse } from '../context/CourseContext';
import { Sparkles, Code, Palette, Brain, Smartphone, Cloud } from 'lucide-react';

const iconMap = {
  Sparkles,
  Code,
  Palette,
  Brain,
  Smartphone,
  Cloud
};

export default function CategoryPills() {
  const { activeCategory, setActiveCategory, courses } = useCourse();

  return (
    <div>
      {/* Filter Tabs */}
      <div className="category-tabs">
        {categories.map((cat) => {
          const count = cat.id === 'all'
            ? courses.length
            : courses.filter((c) => c.category === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`cat-tab ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.name} ({count})
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function CategoryQuickBadges() {
  const { setActiveCategory } = useCourse();

  return (
    <div className="category-badges-row">
      {categories.filter(c => c.id !== 'all').map((cat) => {
        const IconComponent = iconMap[cat.icon] || Sparkles;
        return (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              window.scrollTo({ top: 750, behavior: 'smooth' });
            }}
            className="category-icon-pill"
          >
            <div className="cat-pill-icon">
              <IconComponent size={16} />
            </div>
            <span>{cat.name}</span>
          </button>
        );
      })}
    </div>
  );
}
