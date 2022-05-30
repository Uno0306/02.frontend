const COLORS = {
  green: 'green',
  gold: 'gold',
  orange: 'darkorange',
  blue: 'dodgerblue',
  red: 'red',
  gray: 'gray',
};

function getCourseColor(code = '000') {
  const firstCode = code.charAt(0);
  switch (firstCode) {
    case '1':
      // orange
      return COLORS.orange;
    case '2':
      // blue
      return COLORS.blue;
    case '3':
      // gold
      return COLORS.gold;
    case '4':
      // gold
      return COLORS.gold;
    case '5':
      // red
      return COLORS.red;
    case '6':
      // green
      return COLORS.green;
    default:
      return COLORS.gray;
  }
}

export default getCourseColor;
