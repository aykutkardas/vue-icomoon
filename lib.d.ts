import { AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export interface IcomoonProps {
  iconSet: Record<any, any>;
  icon: string;
  color?: string;
  size?: number;
  disableFill?: boolean;
  removeInitialStyle?: boolean;
  style?: Record<any, any>;
}

export declare const Icomoon: {
  new (): {
    $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & IcomoonProps;
  };
};

declare interface IconSetItem {
  properties: {
    name: string;
  };
  icon: { paths: string[]; attrs: Object[]; width?: number | string };
}

declare interface IconSet {
  icons: IconSetItem[];
}

export declare const iconList: (iconSet: IconSet) => string[] | null;
