const Backgrounds = {
  PrimaryLight: '#FFFFFF',
  PrimaryDark: '#000000',
  SecondaryLight: '#F2F4F7',
  SecondaryDark: '#1C1C1E',
  TertiaryLight: '#FFFFFF',
  TertiaryDark: '#2C2C2E',
  Secondary: '#F7F8FA',
};

const BackgroundsGrouped = {
  PrimaryLight: '#F2F2F7',
  PrimaryDark: '#000000',
  SecondaryLight: '#FFFFFF',
  SecondaryDark: '#1C1C1E',
  TertiaryLight: '#F2F2F7',
  TertiaryDark: '#2C2C2E',
};

const ColorsApp = {
  Blue: '#0066FF',
  BrownLight: '#A2845E',
  BrowDark: '#AC8E68',
  CyanLight: '#32ADE6',
  CyanDark: '#64D2FF',
  GreenLight: '#0BB585',
  GreenDark: '#0BB585',
  IndigoLight: '#5856D6',
  IndigoDark: '#5E5CE6',
  MintLight: '#00C7BE',
  MintDark: '#63E6E2',
  OrangeLight: '#FF8A00',
  OrangeDark: '#FF8A00',
  PinkLight: '#FF2D55',
  PinkDark: '#FF375F',
  PurpleLight: '#AF52DE',
  PurpleDark: '#BF5AF2',
  Red: '#E62200',
  TealLight: '#30B0C7',
  TealDark: '#40CBE0',
  YellowLight: '#FFCC00',
  YellowDark: '#FFD60A',
  VkBlue: '#0000FF',
  VkFuchsia: '#D2008C',
  VkOrange: '#FF8A00',
  VkPurple: '#6A00C8',
  VkGold: '#FFB800',
  Tertiary: '#FFFFFF00',
};

const Fills = {
  PrimaryLight: '#78788033',
  PrimaryDark: '#7878805C',
  QuaternaryLight: '#78788014',
  QuaternaryDark: '#7878802E',
  SecondaryLight: '#78788029',
  SecondaryDark: '#78788052',
  TertiaryLight: '#7878801F',
  TertiaryDark: '#7878803D',
  White40: '#FFFFFF66',
  White80: '#FFFFFFCC',
};

const Grays = {
  Black: '#000000',
  Gray: '#8E8E93',
  Gray2Light: '#AEAEB2',
  Gray2Dark: '#636366',
  Gray3Light: '#C7C7CC',
  Gray3Dark: '#48484A',
  Gray4Light: '#D1D1D6',
  Gray4Dark: '#3A3A3C',
  Gray5Light: '#E5E5EA',
  Gray5Dark: '#2C2C2E',
  Gray6Light: '#F2F4F7',
  Gray6Dark: '#1C1C1E',
  White: '#FFFFFF',
  Gray4: '#D1D3D6',
};

const Labels = {
  PrimaryLight: '#0E0E0F',
  PrimaryDark: '#FFFFFF',
  PrimaryReverseLight: '#FFFFFF',
  PrimaryReverseDark: '#0E0E0F',
  QuaternaryLight: '#3C3C432E',
  QuaternaryDark: '#EBEBF529',
  QuaternaryReverseLight: '#FFFFFF2E',
  QuaternaryReverseDark: '#3C3C4329',
  SecondaryLight: '#3C3E43BF',
  SecondaryDark: '#EBEBF599',
  SecondaryReverseLight: '#FFFFFF99',
  SecondaryReverseDark: '#3C3C4399',
  TertiaryLight: '#3C3E4366',
  TertiaryDark: '#EBEBF54D',
  TertiaryReverseLight: '#FFFFFF4D',
  TertiaryReverseDark: '#3C3C434D',
};

const Miscellaneous = {
  SeparatorLight: '#8080808C',
  SeparatorDark: '#808080B3',
  BarBorderLight: '#0000004D',
  BarBorderDark: '#FFFFFF26',
  ButtonDisableLight: '#7676801F',
  ButtonDisableDark: '#76768040',
  ButtonTintedFillLight: '#007AFF26',
  ButtonTintedFillDark: '#0A84FF26',
  FLoatingTabPillFillLight: '#FFFFFF',
  FloatingTabPillFillDark: '#FFFFFF12',
  FloatingTabPillShadowLight: '#00000014',
  FloatingTabPillShadowDark: '#00000000',
  FloatingTabTextSelectedLight: ColorsApp.Blue,
  FloatingTabTextSelectedDark: '#FFFFFF',
  FloatingTabTextUnselectedLight: '#090909',
  FloatingTabTextUnselectedDark: '#ABABB1ED',
  KeyboardAccessoryBarSelectionLight: '#EBEDF0',
  KeyboardAccessoryBarSelectionDark: '#565455',
  KeyboardEmojiMicLight: '#1B1F26B8',
  KeyboardEmojiMicDark: '#FFFFFF',
  MenuLargeSeparatorLight: '#00000014',
  MenuLargeSeparatorDark: '#00000029',
  SidebarFillSelectedLight: '#FFFFFF',
  SidebarFillSelectedDark: '#8E8E9340',
  SidebarShadowDragOverLight: '#00000033',
  SidebarShadowDragOverDark: '#000000E6',
  SidebarTextSelectedLight: ColorsApp.Blue,
  SidebarTextSelectedDark: Grays.White,
  TabUnselectedLight: '#999999',
  TabUnselectedDark: '#7E7E7E',
  TextFieldBGLight: '#FFFFFF',
  TextFieldBGDark: '#000000',
  TextFieldOutlineLight: '#3C3C434A',
  TextFieldOutlineDark: '#EBEBF54D',
  KitSectionFill: '#F5F5F5',
  KitSectionStrokeLight: '#0000004D',
  KitSectionStrokeDark: '#FFFFFF4D',
};

const Overlays = {
  ActivityViewControllerLight: '#0000001F',
  ActivityViewControllerDark: '#0000004A',
  DefaultLight: '#00000033',
  DefaultDark: '#0000007D',
  CardBlur: '#1D1D1DBF',
  Gray40: '#00000066',
};

const Separators = {
  NonOpaqueLight: '#5455561F',
  NonOpaqueDark: '#54545666',
  OpaqueLight: '#C6C6C8',
  OpaqueDark: '#38383A',
};

const Colors = Object.freeze({
  Backgrounds,
  BackgroundsGrouped,
  ColorsApp,
  Fills,
  Grays,
  Labels,
  Miscellaneous,
  Overlays,
  Separators,
});

const GradientColors = Object.freeze({
  BottomBar: [
    { color: '#272324', offset: '0%', opacity: '1' },
    { color: '#3E3A3B', offset: '25%', opacity: '0.90' },
    { color: '#484546', offset: '50%', opacity: '0.89' },
    { color: '#656363', offset: '70%', opacity: '0.88' },
    { color: '#8B898A', offset: '100%', opacity: '0.86' },
  ],
});

export type ColorsType = typeof Colors;
export type GradientColorsType = {
  offset: string;
  color: string;
  opacity: string;
};

export { Colors, GradientColors };
