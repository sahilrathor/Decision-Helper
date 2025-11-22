import axios from "axios";

interface Location {
    latitude: string;
    longitude: string;
}

const getLocation = async ({ latitude, longitude }: Location) => {
    try {
        const response = await axios.get("https://nominatim.openstreetmap.org/reverse", {
            params: {
                lat: latitude,
                lon: longitude,
                format: "json",
            },
        });

        if (response.data && response.data.display_name) {
            return response.data.display_name;
        } else {
            console.log("No address found.");
        }
    } catch (error) {
        console.error("Error fetching address:", error);
    }
};

export default getLocation;
