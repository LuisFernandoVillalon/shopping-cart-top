import React, { useState } from "react";
import ProductCards from "../product-data/ProductCards";
import SelectedProduct from "../product-data/SelectedProduct";

const Products = (props) => {
    const [category, setCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState("");
    
    const [bagBtnStatus, setBagBtnStatus] = useState(false);

    function handleChange(e) {
        setCategory(e.target.value);
    }
   return (
    <div className="products-page-container">
        <div className="categories-container">
            <h1>CATEGORIES</h1>
            <div onClick={() => setCategory("All")}>All</div>
            <select name="men" id="men" value={category} onChange={(e) => handleChange(e)}>
               <option value="allMale">Men's</option>
               <option value="maleHats">Men's Hats</option>
               <option value="maleChains">Men's Chains</option>
               <option value="maleWatches">Men's Watches</option>
            </select>
            <select name="women" id="women" value={category} onChange={(e) => handleChange(e)}>
               <option value="allFemale">Women's</option>
               <option value="femaleEarrings">Woman's Earrings</option>
               <option value="femaleNecklace">Woman's Necklace</option>
               <option value="femaleRings">Woman's Rings</option>
            </select>
            <div onClick={() => setCategory("Perfumes")}>Perfumes</div>
            <div>
                <SelectedProduct 
                    selectedProduct={selectedProduct}
                    productAmount={props.productAmount} setProductAmount={props.setProductAmount}
                    bagBtnStatus={bagBtnStatus} setBagBtnStatus={setBagBtnStatus}
                />
            </div>
        </div>
        <div>
            <ProductCards
                category={category}
                selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}
                productAmount={props.productAmount} setProductAmount={props.setProductAmount}
                bagBtnStatus={bagBtnStatus} setBagBtnStatus={setBagBtnStatus}
            />
        </div>
    </div>
   )
}

export default Products;