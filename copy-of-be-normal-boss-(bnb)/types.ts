import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export interface RoadmapItemProps {
  phase: string;
  title: string;
  items: string[];
  isLeft: boolean;
  index: number;
}