import React from 'react';
import Container from './container';
import {PageHeader, Carousel, Grid, Row, Col} from 'react-bootstrap';

/**
 * 参数格式见lib/collection.AppData
 */
const Page = ({
    indexPageTitle,
    indexPageCarousel,
    indexPageSectionA,
    indexPageSectionB
    }) => {
    const isNonEmptyArray = x=> Array.isArray(x) && x.length > 0;

    return <div>
        <Container>
            {
                indexPageTitle ?
                    <PageHeader>{indexPageTitle}</PageHeader> : null
            }
            {
                isNonEmptyArray(indexPageCarousel) ?
                    <Carousel>
                        {
                            indexPageCarousel.map((item, index)=> <Carousel.Item key={index}>
                                <a href={item.href}>
                                    <img src={item.src} className="full-width"/>
                                </a>
                                <Carousel.Caption>
                                    {item.head ? <h3>{item.head}</h3> : null}
                                    {item.body ? <p>{item.body}</p> : null}
                                </Carousel.Caption>
                            </Carousel.Item>)
                        }
                    </Carousel> : null
            }
            {
                isNonEmptyArray(indexPageSectionA) ?
                    <Row style={{margin:0}}>
                        {
                            indexPageSectionA.map((item, index)=> <Col xs={12} sm={6} key={index} style={{padding:0}}>
                                <a href={item.href}><img className="full-width" src={item.src}/></a>
                            </Col>)
                        }
                    </Row> : null
            }
            {
                isNonEmptyArray(indexPageSectionB) ?
                    <Row style={{margin: 0}}>
                        {
                            indexPageSectionB.map((item, index)=> <Col xs={6} sm={3} style={{padding: 0}} key={index}>
                                <a href={item.href}><img className="full-width" src={item.src}/></a>
                            </Col>)
                        }
                    </Row> : null
            }
        </Container>
    </div>
};

export default Page;
