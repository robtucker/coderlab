import { Logger } from "isolog";
import React, { Component } from "react";

import { JobList } from "../components/job-list";

import { breakpoints } from "../../../styles";

var jobsArray = [
    {
        id: 2,
        imgClass: "icon-ninja",
        label: "Designers"
    },
    {
        id: 1,
        imgClass: "icon-ninja",
        label: "Marketers"
    },
    {
        id: 3,
        imgClass: "icon-ninja",
        label: "Scientists"
    },
    {
        id: 4,
        imgClass: "icon-ninja",
        label: "Architects"
    },
    {
        id: 5,
        imgClass: "icon-ninja",
        label: "Bankers"
    },
    {
        id: 6,
        imgClass: "icon-ninja",
        label: "Ninjas"
    },
];

Logger.debug(jobsArray);

export class JobListContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.breakpoints = breakpoints;
        // need these keys to obey specific order 
        // iterating over objects doesn't guarantee that
        this.breakpointKeys = ['xl', 'lg', 'md', 'sm', 'xs'];

        this.state = {
            breakpoint: this.getBreakpoint(),
            jobComponents: []
        }
    }

    componentDidMount () {
        Logger.debug("component did mount");
        Logger.debug(this);
        this.setState({
            jobComponents : this.getJobListData(this.state.breakpoint)
        });

        window.addEventListener("resize", ()=>{
            console.log('container has received resize event');
            this.handleResize();
        });
    }

    getBreakpoint() {        
        for(var i = 0; i < this.breakpointKeys.length; i++) {
            if(window.innerWidth > breakpoints[this.breakpointKeys[i]]) {
                return this.breakpoints[this.breakpointKeys[i]];
            }
        }
    }
    
    handleResize () {
        let newBp = this.getBreakpoint();

        if(newBp !== this.state.breakpoint) {
            Logger.debug(`new breakpoint has been found ${newBp}`);
            this.setState({
                breakpoint: newBp,
                jobComponents: this.getJobListData(newBp)
            })
        }
    }

    getJobListData (bp) {
        let lists = [];
        if(bp >= breakpoints.xl) {
            Logger.debug(`screen size ${bp} is greater than ${breakpoints.xl}`);
            lists.push(jobsArray);
        } else if(bp >= breakpoints.md){
            Logger.debug(`screen size ${bp} is greater than ${breakpoints.md}`);
            lists.push(jobsArray.slice(0, 3));
            lists.push(jobsArray.slice(3));
        } else {
            lists.push(jobsArray.slice(0, 2));
            lists.push(jobsArray.slice(2, 4));
            lists.push(jobsArray.slice(4));
        }
        return lists;
    }

    render() {
        return (
            <div> 
                {
                    this.state.jobComponents.map((data) => {
                        Logger.debug(data);
                        return <JobList key={data[0].id} data={data} />
                    })
                }
            </div>
        )
    }

}