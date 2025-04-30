import { useModuleStore } from "@/hooks/useModuleStore";
import { UserModule } from "@/modules/user";
import { ThemeModule } from "@example/modules";

export function UseModuleStoreDemo() {
  const { useReactive } = useModuleStore<ThemeModule>("theme");
  const [dark, setDark] = useReactive(["dark"]);
  const [primaryColor, setPrimaryColor] = useReactive(
    "cssVariables.--primary-color"
  );
  // 修改主题
  function toggleDark() {
    setDark(() => !dark);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>UseModuleStoreDemo</div>
      <div>{`模块theme的配置有`}</div>
      <div>{"" + JSON.stringify(dark)}</div>
      <div>{"primary-color: " + JSON.stringify(primaryColor)}</div>
      <button onClick={toggleDark}>修改配置 </button>
      <input
        value={primaryColor}
        onChange={(e) => setPrimaryColor(() => e.target.value)}
      ></input>
    </div>
  );
}
