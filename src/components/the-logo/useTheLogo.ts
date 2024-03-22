import useGlobalProperties from "@/hooks/useGlobalProperties";
import type { TProps } from "@/types/common";

export default function useTheLogo(props: TProps) {
  const _ = useGlobalProperties();

  const styles = {
    width: props.size + "px",
    height: props.size + "px",
    border: props.hasBorder ? `10px solid ${_.$COLOR.brand_light}` : "",
  };

  return { styles };
}
