import React from "react";
import PageHeader from "@/components/sections/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Tag, Truck } from "lucide-react";

const SparePartsPage = () => (
  <div className="min-h-screen">
    <PageHeader
      title="Spare Parts"
      subtitle="Genuine replacement components for all your cooling systems"
    />
    <div className="max-w-7xl mx-auto py-16 px-4">
      {/* Search and Filter Section */}
      <div className="mb-12 bg-card border border-border rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search for parts by name, model or brand..."
              className="w-full p-3 pl-10 border border-border rounded-md"
            />
            <Search className="absolute left-3 top-3.5 text-muted-foreground w-4 h-4" />
          </div>
          <div className="flex gap-2">
            <select className="p-3 border border-border rounded-md bg-background">
              <option value="">All Categories</option>
              <option value="panel-ac">Panel AC</option>
              <option value="chiller">Chiller</option>
              <option value="hvac">HVAC</option>
            </select>
            <select className="p-3 border border-border rounded-md bg-background">
              <option value="">All Brands</option>
              <option value="rittal">Rittal</option>
              <option value="pfannenberg">Pfannenberg</option>
              <option value="seifert">Seifert</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
      </div>

      {/* Featured Parts */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Parts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-muted flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1581093196277-9f608bb3b1a1?w=800&q=80"
                alt="Compressor"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Panel AC Compressor</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900/30 dark:text-blue-300">
                  In Stock
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                High-performance compressor compatible with Rittal and
                Pfannenberg Panel AC units.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">₹12,500</span>
                <Button className="bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white">
                  Enquire Now
                </Button>
              </div>
            </div>
          </Card>

          <Card className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-muted flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1611323259256-94e36e9a8f1e?w=800&q=80"
                alt="Condenser Coil"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Condenser Coil</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900/30 dark:text-blue-300">
                  In Stock
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Premium quality condenser coil for industrial chillers and HVAC
                systems.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">₹8,750</span>
                <Button className="bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white">
                  Enquire Now
                </Button>
              </div>
            </div>
          </Card>

          <Card className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-muted flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                alt="Control PCB"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Control PCB</h3>
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-amber-900/30 dark:text-amber-300">
                  Limited Stock
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Advanced control PCB board for precision temperature management
                in cooling systems.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">₹15,900</span>
                <Button className="bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white">
                  Enquire Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Panel AC Parts</h3>
            <p className="text-muted-foreground mb-4">
              High-quality replacement parts for all major Panel AC brands
              including Rittal, Pfannenberg, and Seifert.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full mr-2"></div>
                <span>Compressors & Motors</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full mr-2"></div>
                <span>Condenser & Evaporator Coils</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full mr-2"></div>
                <span>Control PCBs & Sensors</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full mr-2"></div>
                <span>Filters & Fans</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">
              View All Panel AC Parts
            </Button>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Chiller Components</h3>
            <p className="text-muted-foreground mb-4">
              Specialized parts for industrial chillers and cooling systems for
              manufacturing facilities.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full mr-2"></div>
                <span>Chiller Compressors</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full mr-2"></div>
                <span>Heat Exchangers</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full mr-2"></div>
                <span>Pumps & Valves</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full mr-2"></div>
                <span>Control Systems</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">
              View All Chiller Components
            </Button>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">HVAC Accessories</h3>
            <p className="text-muted-foreground mb-4">
              Complete range of accessories for HVAC maintenance and repair for
              commercial and industrial systems.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full mr-2"></div>
                <span>Refrigerants & Oils</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full mr-2"></div>
                <span>Installation Materials</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full mr-2"></div>
                <span>Testing & Measurement Tools</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full mr-2"></div>
                <span>Maintenance Supplies</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">
              View All HVAC Accessories
            </Button>
          </div>
        </div>
      </div>

      {/* Why Choose Our Spare Parts */}
      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Why Choose Our Spare Parts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <Tag className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Genuine Parts</h3>
            <p className="text-sm text-muted-foreground">
              100% authentic components sourced directly from manufacturers
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Extensive Inventory</h3>
            <p className="text-sm text-muted-foreground">
              Wide selection of parts for all major brands and models
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Fast Delivery</h3>
            <p className="text-sm text-muted-foreground">
              Quick shipping to minimize your equipment downtime
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#2563eb] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Warranty Backed</h3>
            <p className="text-sm text-muted-foreground">
              All parts come with manufacturer warranty for peace of mind
            </p>
          </div>
        </div>
      </div>

      {/* Request Quote */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Can't Find What You Need?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Our team can source even the most difficult-to-find parts for your
          cooling systems. Contact us with your requirements.
        </p>
        <Button className="bg-gradient-to-r from-[#2563eb] to-[#ec4899] text-white px-8 py-3 text-lg rounded-md hover:opacity-90 transition-opacity">
          Request a Custom Quote
        </Button>
      </div>
    </div>
  </div>
);

export default SparePartsPage;
