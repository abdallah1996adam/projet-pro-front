import api from "./api";

const bookingService = {
    addBooking : async(tourId)=>{
        return await api.post('booking', {tourId})
    },
    getBooking : async(userId)=>{
        return await api.post('booking:id', {userId})
    }
}

export default bookingService;