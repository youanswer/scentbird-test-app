import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col, Button, Tabs, Tab } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'
import truncate from 'lodash/truncate'
import { connect } from 'react-redux'
import { selectProduct } from '~/redux/actions'
import { ITEM_IMAGE } from '~/constants'
import ProductImage from './ProductImage'
import styles from './index.scss'


const description = `MANKIND HERO is a fougere oriental delivering a fresh, modern and masculine scent, created by Stephen Nilsen, Perfumer at Givaudan in collaboration with Jennifer Mullarkey, Fragrance Developer for Parlux Ltd.
Discover your inner HERO with the power of fresh mountain air accord and rich woods infused with sexy black vanilla. This courageous new fragrance by Kenneth Cole is the perfect balance of strength`

const options = [
  {
    id: 0,
    text: '1.7 oz Subscription',
    price: '14.95',
    size: '1.7'
  },
  {
    id: 1,
    text: '1.7 oz One-Time purchase',
    price: '15.95',
    size: '1.7'
  },
  {
    id: 2,
    text: '1 oz One-Time purchase',
    price: '16.95',
    size: '1'
  },
]

class Item extends Component {
  state = {
    readMoreExtended: false
  }

  pickProduct = (product) => {
    this.props.selectProduct(product)
  }

  render() {
    const { readMoreExtended } = this.state
    const { selectedProduct } = this.props

    const conditionallyShorten = (str) => {
      const width = window.innerWidth
      if (width < 768) {
        return str.replace('purchase', '')
      }
      return str
    }

    return (
      <Grid bsClass="container-fluid">
        <Row>
          <Col xsHidden smHidden md={6} lg={6} >
            <ProductImage />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className={styles.heading}>
              <h1>
                SCENTBIRD
              </h1>
              <h2>
                Rose & Prosseco
              </h2>
              <p className={styles.typeText}>
                Hand Cream
              </p>

              <div className={styles.subHeading}>
                <p>AVERAGE RATING: <span className={styles.reviews}>(10 reviews)</span></p>
              </div>

              <div className={styles.ratingContainer}>
                <StarRatings
                  rating={4.3}
                  starRatedColor="#FF408E"
                  numberOfStars={5}
                  name="rating"
                  starDimension="13px"
                  starSpacing="2px"
                />
                <span>
                  4.3 out of 5
                </span>
              </div>
              <Col xs={12} mdHidden lgHidden>
                <ProductImage />
              </Col>
              <Col xs={12} className={styles.divider} />

              <Row className={styles.cta}>
                <div >
                  <Col xs={12} sm={8} md={7} className={styles.selectedSubscription}>
                    <img
                      src={ITEM_IMAGE}
                      alt="product"
                    />
                    <p>Subscription Price: ${selectedProduct.price}</p>
                    <p>Size: {selectedProduct.size} oz</p>
                  </Col>
                </div>
                <Col xs={12} sm={4} md={5}>
                  <Button
                    block
                    bsClass={styles.button}
                  >
                    ADD TO QUEUE
                  </Button>
                </Col>
              </Row>

              <Row className={styles.pickerContainer}>
                {options.map(i => (
                  <Col xs={6} key={`${i.id}`}>
                    <div
                      className={styles.picker}
                      style={{ borderColor: i.id === selectedProduct.id ? '#FF408E' : '#EFEFEF' }}
                      onClick={() => this.pickProduct(i)}
                    >
                      <img
                        src={ITEM_IMAGE}
                        alt="product"
                      />
                      <p>{conditionallyShorten(i.text)}</p>
                    </div>
                  </Col>
                ))}
              </Row>

              <div className={styles.description}>
                <h3>DESCRIPTION</h3>
                {readMoreExtended
                  ? <p>{description}
                    <span
                      className={styles.showMore}
                      onClick={() => this.setState({ readMoreExtended: false })}
                    >
                      {'  < Show less'}
                    </span>
                  </p>
                  :
                  <p>
                    {truncate(description, { length: 150 })}
                    <span
                      className={styles.showMore}
                      onClick={() => this.setState({ readMoreExtended: true })}
                    >
                      {'  Read more >'}
                    </span>
                  </p>
                }
              </div>

              <div className={styles.tabsContainer}>

                <Tabs defaultActiveKey={1} id="tabs" className={styles.tabs}>
                  <Tab eventKey={1} title="HOW IT WORKS">
                    <p><br />
                    Rebottled Eau de Cartier Essence de Bois, rebottled by Scentbird, Inc., an independent bottler from a genuine product wholly independent of Cartier
  Scentbird, Inc., New York, NY 10001
                    </p>
                  </Tab>
                  <Tab eventKey={2} title="INGREDIENTS">
                    <p><br />
                    Rebottled Eau de Cartier Essence de Bois, rebottled by Scentbird, Inc., an independent bottler from a genuine product wholly independent of Cartier
  Scentbird, Inc., New York, NY 1000112312
                    </p>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

Item.propTypes = {
  selectProduct: PropTypes.func.isRequired,
  selectedProduct: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = (state) => {
  const { product: { selectedProduct } } = state
  return { selectedProduct }
}

export default connect(mapStateToProps, { selectProduct })(Item)
