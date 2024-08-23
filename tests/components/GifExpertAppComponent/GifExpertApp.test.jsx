import { render, renderHook } from "@testing-library/react";
import { GifExpertApp } from "../../../src/components/GifExpertAppComponent/GifExpertApp";
import { useState } from "react";

describe('GifExpertApp component', () => {

    test('should match with snapshot', () => {

        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot
    })

    test('should return the initial state', () => {

        const { result } = renderHook(() => useState(['']));
        const [categories] = result.current;
        expect(categories).toEqual(['']);
    })
})