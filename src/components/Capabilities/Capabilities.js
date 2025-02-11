import React from 'react';
import './Capabilities.css';

const capabilitiesData = [
  {
    id: 1,
    title: "1 Cr+ Orders\nFullfilled Till Date",
    subtitle: "95% orders are Delivered in less than 5 Days",
    icon: "M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5zM19 19.09H5V4.91h14v14.18zM6 15h12v2H6zm0-4h12v2H6zm0-4h12v2H6z"
  },
  {
    id: 2,
    title: "Pan India Coverage",
    subtitle: "Reaching every corner of India",
    icon: "M12 2C7.8 2 4 5.22 4 9.2c0 2.38 1.19 4.52 3.03 5.82.48.38.77.96.77 1.58v1h8.4v-1c0-.62.29-1.2.77-1.58C18.81 13.72 20 11.58 20 9.2 20 5.22 16.2 2 12 2zm-1.2 16v1h2.4v-1H10.8zm4.8-2H8.4v-1.26c-.48-.42-.8-1.01-.8-1.67 0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5H13c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .66-.32 1.25-.8 1.67V16z"
  },
  {
    id: 3,
    title: "Transparency",
    subtitle: "Dedicated KAMs for live support\nAdvanced NDR panel",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z"
  },
  {
    id: 4,
    title: "60,000+ Products",
    subtitle: "From 8,500 manufacturers,\nimporters & sellers",
    icon: "M21.6 18.2L13 11.75v-.91c1.65-.49 2.8-2.17 2.43-4.05-.26-1.31-1.3-2.4-2.61-2.7C10.54 3.57 8.5 5.3 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76L2.4 18.2C1.63 18.78 2.04 20 3 20h18c.96 0 1.37-1.22.6-1.8zM7 17l3-3 2 2 3-3 3 3H7z"
  },
  {
    id: 5,
    title: "20% Lower Costs",
    subtitle: "Own Supply Chain\n8 delivery partners\n& unbeatable price",
    icon: "M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
  },
  {
    id: 6,
    title: "Daily Payments",
    subtitle: "Ensure uninterrupted cash flow",
    icon: "M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H8c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm-4-3h2v-1.5c1.1 0 2-.9 2-2s-.9-2-2-2v-1.5h-2v1.5c-1.1 0-2 .9-2 2s.9 2 2 2V16z"
  },
  {
    id: 7,
    title: "Account Management",
    subtitle: "Dedicated support for your business",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4h-4v-2h4v-2h-4V9h4V7h-6v10h6z"
  },
  {
    id: 8,
    title: "Bulk Processing",
    subtitle: "Efficient order management",
    icon: "M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.001 14H4z M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z"
  }
];

const Capabilities = () => {
  return (
    <section className="capabilities-section">
      <h2 className="capabilities-title">Why Choose Dropship India?</h2>
      <div className="capabilities-grid">
        {capabilitiesData.map((item) => (
          <div key={item.id} className="capability-card">
            <div className="capability-icon">
              <svg viewBox="0 0 24 24" className="icon">
                <path d={item.icon} />
              </svg>
            </div>
            <div className="capability-content">
              <h3 className="capability-title">{item.title}</h3>
              <p className="capability-subtitle">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
