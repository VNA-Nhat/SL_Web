import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: '',
      products: {
        Apple: [
          { name: 'Apple Watch Series 1', image: 'https://viostore.vn/wp-content/uploads/2019/06/aw2-1.png', description: 'It just something'},
          { name: 'Apple Watch Series 2', image: 'https://luxtech.com.vn/public/uploads/2019/11/applewatch_4_2_900x900_900x900-2.png' },
          { name: 'Apple Watch Series 3', image: 'https://cdn.tgdd.vn/Products/Images/7077/239158/s16/apple-watch-s3-gps-38mm-trang-650x650.png'},
          { name: 'Apple Watch Series 4', image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/m/u/mu662.png'},
          { name: 'Apple Watch Series 5', image: 'https://cdn.tgdd.vn/Products/Images/7077/212770/s16/apple-watch-s5-gps-44mm-trang-1-650x650.png'},
          { name: 'Apple Watch Series 6', image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/4/0/40-gps-nhom-blue_10.png'},
        ],
        Omega: [
          { name: 'Omega Seamaster 300 Steel', image: 'https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21030422001001-l-242e74.png' },
          { name: 'Omega Seamaster 300 Steel - Gold', image: 'https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21020422001001-l-0a48d5.png' },
          { name: 'Omega Seamaster 300 Titanium', image:'https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21060422099001-l-e6e484.png'},
          { name: 'Omega Seamaster 300 Tantalum', image:'https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-chronograph-44-mm-21060445103001-l-533686.png'},
          { name: 'Omega Seamaster 300 Gold', image:'https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-chronograph-44-mm-21062445101001-l-1a4408.png'},
          { name: 'Omega Boutique Edition', image:'https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-boutique-editions-co-axial-master-chronometer-39-5-mm-51113402011002-l-74fa6d.png'},
        ],
        Rolex: [
          { name: 'Rolex Cosmograph Daytona Oystersteel and yellow gold', image: 'https://content.rolex.com/v7/dam/2023-06/upright-bba-with-shadow/m126503-0001.png?impolicy=v7-grid&imwidth=320' },
          { name: 'Rolex Cosmograph Daytona Everose gold', image: 'https://content.rolex.com/v7/dam/2023-06/upright-bba-with-shadow/m126505-0001.png?impolicy=v7-grid&imwidth=320' },
          { name: 'Rolex Cosmograph Daytona white gold', image: 'https://content.rolex.com/v7/dam/2023-06/upright-bba-with-shadow/m126529ln-0001.png?impolicy=v7-grid&imwidth=320'},
          { name: 'Rolex Cosmograph Daytona yellow gold', image: 'https://content.rolex.com/v7/dam/2023-06/upright-bba-with-shadow/m126508-0001.png?impolicy=v7-grid&imwidth=320'},
          { name: 'Rolex Cosmograph Daytona Platinum', image: 'https://content.rolex.com/v7/dam/2023-06/upright-bba-with-shadow/m126506-0001.png?impolicy=v7-grid&imwidth=320'},
          { name: 'Rolex Cosmograph Daytona Oystersteel', image: 'https://content.rolex.com/v7/dam/2023-06/upright-bba-with-shadow/m126500ln-0001.png?impolicy=v7-grid&imwidth=320'},
        ],
      },
    };
  }

  handleShopClick = () => {
    // Implement the shop functionality here. For now, let's just show an alert for demonstration.
    // alert("Shop clicked!");
  };
  

  componentDidMount() {
    // Retrieve the selected category from localStorage
    const savedCategory = localStorage.getItem('selectedCategory');
    if (savedCategory) {
      console.log('Retrieved from localStorage:', savedCategory);
      this.selectCategory(savedCategory);
    }
  }
  
  selectCategory = (category) => {
    console.log('Selected category:', category);
    this.setState({
      selectedCategory: category,
    });
  }

  render() {
    const { selectedCategory, products } = this.state;
    

    return (
      <div className="home">
        <header className="header">
          <div className="logo">
            <img src="https://img.freepik.com/premium-vector/luxury-watch-brand-logo_628554-9.jpg" alt="Logo" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
          <div className="shop">
            <button onClick={this.handleShopClick}>
              <img
                src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
                alt="Shop"
                style={{
                  maxWidth: "40px", // Adjust the maximum width as needed
                  maxHeight: "21px", // Adjust the maximum height as needed
                }}
              />
            </button>
          </div>
          <div className="login">
            <Link to="/login">
            <button>Login</button>
            </Link> 
          </div>
        </header>
        { <Navbar selectedCategory={selectedCategory} selectCategory={this.selectCategory} /> }
        <div className="content">
          {products[selectedCategory].map((product, index) => (
            <div key={index} className="product">
              <img src={product.image} alt={product.name} />
              <div>{product.name}</div>
            </div>
          ))}
        </div>
        <footer className="footer">
          <div>About Us</div>
          <a href="https://www.youtube.com"><img src="youtube-icon.png" alt="YouTube" /></a>
          <a href="https://www.facebook.com"><img src="facebook-icon.png" alt="Facebook" /></a>
        </footer>
      </div>
    );
  }
}

export default Home;
