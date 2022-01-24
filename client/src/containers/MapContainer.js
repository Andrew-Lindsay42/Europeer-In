import React, { useState, useEffect } from "react";
import CountryCard from '../components/CountryCard';
import CountryInfo from '../components/CountryInfo';
import CountryList from '../components/CountryList';
import CountrySearch from '../components/CountrySearch';
import "../components/CountrySearch.css"
import LeafletMap from "./LeafletMap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Collapse from "react-bootstrap/esm/Collapse";
import { Search } from 'react-bootstrap-icons';
import './MapContainer.css'

const MapContainer = () => {

    const [selectedCountry, setSelectedCountry] = useState("")
    const [countryList, setCountryList] = useState([])
    const [filter, setFilter] = useState('')

    const checkFilter = (country) => {
        return (country.name.common.toUpperCase().includes(filter.toUpperCase()))
    }


    const searchForCountry = (searchValue) => {
            const searched = searchValue.toLowerCase()
            const values = europe_data
            let searchedCountry = values.filter(name => name.toLowerCase().includes(searched))
            console.log(searchedCountry)
            setSelectedCountry(searchedCountry)
    }    

        const getCountries = () => {
        fetch('https://restcountries.com/v3.1/region/europe')
        .then(res => res.json())
        .then(data => setCountryList(data));
    }
        const onCountryClick = (country) => {
        setSelectedCountry(country)
    }
        useEffect(() => {
        getCountries();
    }, [])

    return (
        <>
            <LeafletMap setSelectedCountry={setSelectedCountry} />

            <div className="right-side">
                <div className="dropdown-card">
                    {selectedCountry ?
                        <Accordion defaultActiveKey="0" style={{ border: "none", zIndex: "0" }}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header style={{ border: "none" }}></Accordion.Header>
                                <Collapse in={selectedCountry}>
                                    <Accordion.Body>
                                        <CountryCard selectedCountry={selectedCountry} />
                                    </Accordion.Body>
                                </Collapse>
                            </Accordion.Item>
                        </Accordion> :
                        <Card style={{ border: "none", zIndex: "0", background: "transparent" }}>
                            <Card.Header as='h4' style={{ margin: "8px" }}>Select a Country to Begin</Card.Header>
                        </Card>
                    }
                </div>

                <div className="search-container">
                    <Accordion style={{ border: "none" }}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="search-bar" style={{ border: "none" }}><Search/></Accordion.Header>
                            <Accordion.Body>
                                <CountrySearch />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </div>
            <div className="SearchList">
            <CountryList countryList={countryList} onCountryClick={onCountryClick} checkFilter={checkFilter}/>
            {selectedCountry ? <CountryInfo country = {selectedCountry}/> : null}
            </div>
            
        </>
    )
}

export default MapContainer;