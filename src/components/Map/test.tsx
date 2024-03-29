import { render, screen } from "@testing-library/react";
import Map from ".";

describe("<Map />", () => {
  it("should render without any marker", () => {
    render(<Map />);

    expect(
      screen.getByRole("link", {
        name: /openstreetmap/i,
      })
    ).toBeInTheDocument();
  });

  it("should render with the marker in correct place", () => {
    const place = {
      id: "1",
      name: "Rio de janeiro",
      slug: "rio-de-janeiro",
      location: {
        latitude: 0,
        longitude: 0,
      },
    };

    render(<Map places={[place]} />);

    expect(screen.getByTitle(/rio de janeiro/i)).toBeInTheDocument();
  });
});
