'use client';
import type { TooltipItem } from 'chart.js';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,

} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function Skill() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Vue', level: 90 },
    { name: 'Node', level: 85 },
    { name: 'Typescript', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'SpringBoot', level: 85 },
    { name: 'Mybatis', level: 90 },
    { name: 'SQL', level: 90 },
    { name: 'Python', level: 75 },
  ];

  const data = {
    labels: skills.map(skill => skill.name),
    datasets: [
      {
        label: 'Proficiency Level',
        data: skills.map(skill => skill.level),
        backgroundColor: [
          '#61DAFB', // React (blue)
          '#41B883', // Vue (green)
          '#68A063', // Node (green)
          '#3178C6', // Typescript (blue)
          '#04AA6D', // HTML/CSS (orange)
          '#007396', // Java (blue)
          '#6DB33F', // SpringBoot (green)
          '#fe6602', // Mybatis (red)
          '#c74634', // SQL (blue)
          '#3776ab', // Python (blue)
        ],
        borderColor: '#FFFFFF',
        borderWidth: 2,
        cursor: 'pointer',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
      title: {
        display: true,
        text: '',
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label(tooltipItem: TooltipItem<'bar'>) {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw as number;
            return `${label}: ${value}%`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          callback(_: unknown, index: number) {
            const skill = skills[index];
            return skill?.name ?? ''; // Display only the name in the axis or fallback to an empty string
          },
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10,
          font: {
            size: 12,
          },
        },
      },
    },
    layout: {
      padding: {
        bottom: 50, // Add padding for custom labels
      },
    },
  };

  ChartJS.register();

  return (
    <div style={{ width: '100%', height: '500px', margin: '0 auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};
