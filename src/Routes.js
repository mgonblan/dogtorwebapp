import React from "react";
import Topappbars from "pages/Topappbars";
import Timepicker from "pages/Timepicker";
import TextFields from "pages/TextFields";
import Tabs from "pages/Tabs";
import Switch from "pages/Switch";
import Snackbars from "pages/Snackbars";
import Sliders from "pages/Sliders";
import Segmentedbuttons from "pages/Segmentedbuttons";
import Radiobuttons from "pages/Radiobuttons";
import Navigationdrawer from "pages/Navigationdrawer";
import Navigationbars from "pages/Navigationbars";
import Menu from "pages/Menu";
import Lists from "pages/Lists";
import Iconbuttons from "pages/Iconbuttons";
import FABs from "pages/FABs";
import Dividers from "pages/Dividers";
import Dialogs from "pages/Dialogs";
import Datepicker from "pages/Datepicker";
import Chips from "pages/Chips";
import Checkboxes from "pages/Checkboxes";
import Cards from "pages/Cards";
import Buttons from "pages/Buttons";
import Bottomsheets from "pages/Bottomsheets";
import Bottomappbars from "pages/Bottomappbars";
import LayoutBreakpoints from "pages/LayoutBreakpoints";
import Elements from "pages/Elements";
import Elevation from "pages/Elevation";
import ColorGuidance from "pages/ColorGuidance";
import Typography from "pages/Typography";
import Store from "pages/Store";
import Home1 from "pages/Home1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/store" element={<Store />} />
        <Route path="/typography" element={<Typography />} />
        <Route path="/colorguidance" element={<ColorGuidance />} />
        <Route path="/elevation" element={<Elevation />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/layoutbreakpoints" element={<LayoutBreakpoints />} />
        <Route path="/bottomappbars" element={<Bottomappbars />} />
        <Route path="/bottomsheets" element={<Bottomsheets />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/checkboxes" element={<Checkboxes />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/datepicker" element={<Datepicker />} />
        <Route path="/dialogs" element={<Dialogs />} />
        <Route path="/dividers" element={<Dividers />} />
        <Route path="/fabs" element={<FABs />} />
        <Route path="/iconbuttons" element={<Iconbuttons />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/navigationbars" element={<Navigationbars />} />
        <Route path="/navigationdrawer" element={<Navigationdrawer />} />
        <Route path="/radiobuttons" element={<Radiobuttons />} />
        <Route path="/segmentedbuttons" element={<Segmentedbuttons />} />
        <Route path="/sliders" element={<Sliders />} />
        <Route path="/snackbars" element={<Snackbars />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/textfields" element={<TextFields />} />
        <Route path="/timepicker" element={<Timepicker />} />
        <Route path="/topappbars" element={<Topappbars />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
