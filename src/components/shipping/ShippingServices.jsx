import ShipHandling from "./ShipHandling";
import CargoManagement from "./CargoManagement";
import FleetTracking from "./FleetTracking";

const ShippingServices = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          Shipping Services
        </h1>

        <p className="text-gray-600 mt-3">
          Comprehensive maritime solutions for
          training, logistics and fleet management.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <ShipHandling />
        <CargoManagement />
        <FleetTracking />
      </div>
    </section>
  );
};

export default ShippingServices;