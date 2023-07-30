export function formatCoordinates(payload: {
  point1: number[];
  point2: number[];
  point3: number[];
}): string {
  const copiedPayload = {
    point1: [...payload.point1],
    point2: [...payload.point2],
    point3: [...payload.point3],
  };

  return `${copiedPayload.point1.reverse().join(',')};${copiedPayload.point2
    .reverse()
    .join(',')};${copiedPayload.point3.reverse().join(',')}`;
}
