import "./App.css";
import {
  DropDownItem,
  DropdownMenu,
  DropdownSubmenu,
} from "./components/DropDown";
import { Dropdown } from "./components/DropDown/DropDown";
import { DropdownTrigger } from "./components/DropDown/DropdownTrigger";

function App() {
  const handleSelect = (v: any) => {
    console.log(v);
  };
  return (
    <div className='App'>
      <Dropdown onSelect={handleSelect}>
        <DropdownTrigger>Right click Anywhere</DropdownTrigger>
        <DropdownMenu>
          <DropDownItem
            label='Open Panel'
            onClick={() => alert("Open Panel")}
          />
          <DropDownItem
            label='Add to Queue'
            onClick={() => alert("Add to Queue")}
          />
          <DropDownItem
            label='Add to Clipboard'
            onClick={() => alert("Add to Clipboard")}
          />
          <DropDownItem
            label='Open External App'
            onClick={() => alert("Open External App")}
          />
          <DropDownItem
            label='Add Annotation'
            onClick={() => alert("Add Annotation")}
          />
          <DropdownSubmenu label='Export'>
            <DropDownItem
              label='Export to Excel'
              onClick={() => alert("Add to Queue")}
            />
          </DropdownSubmenu>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default App;
