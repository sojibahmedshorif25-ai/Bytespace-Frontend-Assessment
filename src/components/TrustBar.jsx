import React from 'react';
import { Video, Award, Users, Clock } from 'lucide-react';

export default function TrustBar() {
  const features = [
    { icon: Video, title: '500+ HD Video Courses' },
    { icon: Award, title: 'Industry-Recognized Certificates' },
    { icon: Users, title: '1-on-1 Mentor Code Reviews' },
    { icon: Clock, title: 'Lifetime Unlimited Access' }
  ];

  return (
    <div className="trust-bar">
      <div className="container">
        <div className="trust-content">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="trust-item">
                <div className="trust-icon">
                  <Icon size={20} />
                </div>
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
