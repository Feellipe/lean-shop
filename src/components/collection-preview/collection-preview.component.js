import React from "react";

import "./collection-preview.style.scss";

import CollectionItem from "../collection-item/collection-item.component";
import {Preview, Title, CollectionPreviewContainer} from './collection-preview.styles'

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <Title>{title.toUpperCase()} </Title>
    <Preview>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
    </Preview>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
