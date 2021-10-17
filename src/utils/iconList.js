export const iconList = (iconSet) => {
  if (iconSet && Array.isArray(iconSet.icons)) {
    return iconSet.icons.map((icon) => icon.properties.name);
  }

  return null;
};
