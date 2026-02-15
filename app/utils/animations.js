export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};
