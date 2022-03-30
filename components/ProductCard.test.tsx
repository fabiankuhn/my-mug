import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { Product } from "../models/product";

beforeEach(() => {
	render(<ProductCard product={someProduct()} />);
});

it("should show the heading", () => {
	expect(screen.getByText("some heading")).toBeVisible();
});

it("should show the description", () => {
	expect(screen.getByText("some description")).toBeVisible();
});

it("should show the formatted price with the currency", () => {
	expect(screen.getByText("CHF 99.95")).toBeVisible();
});

it("should show the create button", () => {
	expect(screen.getByRole("button", { name: "Create" })).toBeVisible();
});

function someProduct(): Product {
	return {
		id: "some id",
		heading: "some heading",
		price: 99.95,
		description: "some description",
		image: "/some-image-name.png",
	};
}
