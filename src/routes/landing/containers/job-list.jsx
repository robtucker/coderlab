import { Logger } from "isolog";
import React, { Component } from "react";

import { JobList } from "../components/job-list";


var jobsArray = [
    {
        id: 1,
        imgClass: "icon-architect",
        label: "Architects"
    },
    {
        id: 2,
        imgClass: "icon-marketer",
        label: "Marketers"
    },
    {
        id: 3,
        imgClass: "icon-scientist",
        label: "Scientists"
    },
    {
        id: 4,
        imgClass: "icon-designer",
        label: "Designers"
    },
    {
        id: 5,
        imgClass: "icon-investor",
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
        this.state = {
            jobComponents: []
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