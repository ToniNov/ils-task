export const osrmApi = async (coordinates: string): Promise<Response> => {
  const response = await fetch(
    `https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson`,
  );

  return response.json();
};
