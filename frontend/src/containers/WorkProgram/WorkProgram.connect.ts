import {Dispatch} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import actions from "./actions";
import {getWorkProgram, getWorkProgramField, isCanApprove, isCanArchive, isCanComment, isCanEdit} from './getters';
import {WorkProgramActions} from "./types";

import {rootState} from "../../store/reducers";
import {WorkProgramGeneralFields} from "./enum";

const mapStateToProps = (state:rootState) => {
    return {
        workProgram: getWorkProgram(state),
        workProgramTitle: getWorkProgramField(state, WorkProgramGeneralFields.TITLE),
        workProgramStatus: getWorkProgramField(state, 'expertise_status') || 'WK',
        canSendToArchive: isCanArchive(state),
        canApprove: isCanApprove(state),
        canSendToExpertise: isCanEdit(state),
        canComment: isCanComment(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch<WorkProgramActions>) => ({
    // @ts-ignore
    actions: bindActionCreators(actions, dispatch),
});

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps);
