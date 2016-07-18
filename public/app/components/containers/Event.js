import React, {Component} from 'react'
import ReactBootstrap, { Modal } from 'react-bootstrap'
import Loader from 'react-loader'
import Nav from '../../components/Nav'
import Register from '../../components/Register'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import store from '../../stores/store'
import actions from '../../actions/actions'
import { connect } from 'react-redux'
import TextUtils from '../../utils/TextUtils'
import api from '../../api/api'


class Event extends Component {

	constructor(props, context){
		super(props, context)
		this.state = {
			showLoader: false
		}
	}

	render(){

		return (
			<div>
				<Nav />

		        <section id="slider" className="slider-parallax dark full-screen" style={{background:'url("/images/lounge.jpg") center'}}>
					<Loader options={this.props.loaderOptions} loaded={!this.state.showLoader} className="spinner" loadedClassName="loadedContent" />
		            <div className="container clearfix">

		                <div className="vertical-middle">

		                    <div className="heading-block center nobottomborder">
		                        <h1 data-animate="fadeInUp">{this.props.event.title}</h1>
								<img style={{width:124, borderRadius:62}} src={'https://media-service.appspot.com/site/images/'+this.props.event.image+'?crop=260'} alt="Velocity 360" />
		                        <span data-animate="fadeInUp" data-delay="300">
		                        	{this.props.event.date} | {this.props.event.time}
		                        </span>
		                    </div>

		                </div>
		            </div>
		        </section>


				<section id="content">
					<div className="content-wrap">

						<div className="container clearfix">
							<div className="col_two_third bottommargin-sm">
			                    <div className="fancy-title title-bottom-border">
			                        <h2 style={{fontWeight:400}}>Highly Demanded Skills</h2>
			                    </div>
								<img style={{background:'#fff', float:'left', border:'1px solid #ddd', maxWidth: 260, padding:6, marginRight:12}} className="image_fade" src={'https://media-service.appspot.com/site/images/'+this.props.event.image+'?crop=260'} alt="Velocity 360" />
								<div dangerouslySetInnerHTML={{__html: TextUtils.convertToHtml(this.props.event.description) }}></div>
								<br />
			                    <img src="/images/wework.jpg" />
			                    <i style={{fontWeight:100}}>* All events are held at our WeWork Location on 28th Street.</i>
							</div>

							<div className="col_one_third bottommargin-sm hidden-xs col_last" style={{borderLeft: '1px solid #ddd', padding: 36}}>
								<div className="widget clearfix">
									<h4>Recent Posts</h4>
									<hr />
									<a href="/feed">View All</a>
								</div>
							</div>			

						</div>
					</div>
				</section>

				<Register />
				<Footer />
			</div>

		)

	}
}


const stateToProps = function(state) {
    return {
        loaderOptions: state.staticReducer.loaderConfig,
        currentUser: state.profileReducer.currentUser,
        courses: state.courseReducer.courseArray,
        event: state.eventReducer.eventArray[0]
    }
}

export default connect(stateToProps)(Event)

