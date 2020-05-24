import books from '../reducer'

describe('book-list reducer', () => {
    it('mutates state when a request action is executed', () => {
        const action = {
            type: "FETCH_BOOKS_REQUEST"
        }
        const state = {
            meta: [],
            ratings: [],
            images: [],
            isLoadingMeta: false,
            isLoadingRatings: false,
            isLoadingImages: false,
            errorMeta: null,
            errorRatings: null,
            errorImages: null,
        }
        const expected = {

            meta: [],
            ratings: [],
            images: [],
            isLoadingMeta: false,
            isLoadingRatings: false,
            isLoadingImages: false,
            errorMeta: null,
            errorRatings: null,
            errorImages: null,

            isLoadingBooks: true,
        }
        expect(books(state, action)).toEqual(expected)
    })
})