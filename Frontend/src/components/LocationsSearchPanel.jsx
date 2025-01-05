import PropTypes from "prop-types";

const propTypes = {
  setOpenVehiclePanel: PropTypes.func.isRequired,
  setOpenPanel: PropTypes.func.isRequired,
};

const LocationsSearchPanel = (props) => {
  const { setOpenVehiclePanel, setOpenPanel } = props;
  const LOCATIONS = [
    { id: "1", address: "366 Centre Ave Rockland, MA 02370" },
    { id: "2", address: "301 SHANAN ST,BRADY,TX,76825" },
    { id: "3", address: "316 Riverview Ct, Canon City , CO 81212" },
    { id: "4", address: "37010 Dusterberry Way , Fremont CA 94536" },
  ];
  return (
    <div>
      {LOCATIONS.map((location) => (
        <div
          onClick={() => {
            setOpenVehiclePanel(true);
            setOpenPanel(false);
          }}
          key={location.id}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{location.address}</h4>
        </div>
      ))}
    </div>
  );
};
LocationsSearchPanel.propTypes = propTypes;
export default LocationsSearchPanel;
