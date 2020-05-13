import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

    constructor() {
        super();
        this.ref = firebase.firestore().collection('userData');
        this.state = {
            businessName: '',
            businessWebsite: '',
            city: '',
            continent: '',
            country: '',
            countryCode: '',
            ipName: '',
            ipType: '',
            isp: '',
            lat: '',
            lon: '',
            org: '',
            query: '',
            region: '',
            status: '',
            data: []
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    componentDidMount() {
        fetch('https://extreme-ip-lookup.com/json')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                },
                // error handler
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    onSubmit = (e) => {
        e.preventDefault();

        const { businessName, businessWebsite, city, continent, country, countryCode, ipName, ipType, isp, lat, lon, org, query, region, status,  data } = this.state;

        this.ref.add({
            businessName,
            businessWebsite,
            city,
            continent,
            country,
            countryCode,
            ipName,
            ipType,
            isp,
            lat,
            lon,
            org,
            query,
            region,
            status
        }).then((docRef) => {
            this.setState({
                businessName: data.businessName,
                businessWebsite: data.businessWebsite,
                city: data.city,
                continent: data.continent,
                country: data.country,
                countryCode: data.countryCode,
                ipName: data.ipName,
                ipType: data.ipType,
                isp: data.isp,
                lat: data.lat,
                lon: data.lon,
                org: data.org,
                query: data.query,
                region: data.region,
                status: data.status
            });
            this.props.history.push("/")
        })

            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }


    render() {
        const { data } = this.state;

        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                        </h3>
                    </div>
                    <div class="panel-body">
                        <form onSubmit={this.onSubmit}>

                            <button type="submit" class="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;