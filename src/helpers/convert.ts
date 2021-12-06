export const toString = (str: any): string => {
  return str ? str.toString() : '';
};

export const toUniqueArray = (str: string | null): any[] => {
  return str ? Array.from(new Set(str.replace('%2C', ',').split(','))) : [];
};
