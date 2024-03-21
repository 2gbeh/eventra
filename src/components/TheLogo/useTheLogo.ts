import { PropType } from "vue";
import useGlobalProperties from "@/hooks/useGlobalProperties";

export default function useTheLogo(props: PropType) {
  const _ = useGlobalProperties();

  const styles = {
    width: props.size + "px",
    height: props.size + "px",
    border: props.hasBorder ? `10px solid ${_.$COLOR.brand_light}` : "",
  };

  return { styles };
}
