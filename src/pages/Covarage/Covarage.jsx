import { Search } from 'lucide-react'
import React, { useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router'

const Covarage = () => {
    const serviceCenters = useLoaderData()
    console.log(serviceCenters)
    const mapRef = useRef(null)
    const position = [23.8103, 90.4125];

    const handleSearch = (e) => {
        e.preventDefault()
        const location = e.target.search.value;
        const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()))
        if (district) {
            const coord = [district.latitude, district.longitude]
            mapRef.current.flyTo(coord, 14)
        }
    }

    return (
        <div>
            <div className="space-y-6">
                <div className="font-bold text-2xl md:text-4xl">
                    <h1>We are available in 64 districts</h1>
                </div>
                <div className="relative max-w-2xs">
                    <form onSubmit={handleSearch}>
                        <div className="join">
                            <div>
                                <label className="input join-item bg-base-200 rounded-l-full focus-within:border-none border-none focus-within:ring-0 focus-within:outline-none">
                                    <span className="text-gray-500"><Search size={18} /></span>
                                    <input type="text" placeholder="Search" name='search' className="focus:ring-0 focus:outline-none bg-base-200 w-52 md:w-3xs placeholder:text-gray-500 placeholder:font-semibold" />
                                </label>
                            </div>
                            <button className="absolute right-0 md:-right-10 btn text-black bg-primary rounded-full join-item border-none outline-none z-10">Search</button>
                        </div>
                    </form>
                </div>
                <div className="space-y-4">
                    <div>
                        <h1 className="font-bold text-xl">We deliver almost all over Bangladesh</h1>
                    </div>
                    <div className="w-full h-[500px]">
                        <MapContainer center={position} zoom={8} scrollWheelZoom={true} className="h-[500px]" ref={mapRef}>
                            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            {
                                serviceCenters.map((serviceCenter, index) => (
                                    <Marker key={index} position={[serviceCenter.latitude, serviceCenter.longitude]}>
                                        <Popup>
                                            <strong>{serviceCenter.district}</strong> <br />
                                            Service Area: {serviceCenter.covered_area.join(', ')}
                                        </Popup>
                                    </Marker>
                                ))
                            }
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Covarage
