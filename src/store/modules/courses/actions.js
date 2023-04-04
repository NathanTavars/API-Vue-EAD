import CourseServices from "@/services/CourseServices"

const actions = {
    getCourses ({commit}) {
        CourseServices.getCourses()
        .then(response => commit('ADD_MY_COURSES', response.data))
    },

    markLessonViewed ({commit, state}) {
        CourseServices.markLessonViewed(state.lessonPlayer.id)
                        .then(() => commit('ADD_NEW_VIEW_LESSON'))
    },
}

export default actions