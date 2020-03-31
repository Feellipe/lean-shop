import {createSelector} from 'reselect'

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShop],
    collections => Object.keys(collections).map(key => collections[key])
)

// essa função recebe o param id da ulr para fazer um map e encontrar o nome da collection que tem o mesmo id
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
)