import { type } from "@testing-library/user-event/dist/type";
import DeleteIcon from '@mui/icons-material/Delete';
import { useWorkoutContext } from "../hooks/useWorkoutContext";
function WorkoutDetails({workout}) {
    const {dispatch} =useWorkoutContext();
    async function handleClick() {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json();
        if (response.ok) {
            dispatch({type:'DELETE_WORKOUT',payload: json});
            
        }
        
    }
    return(
        <div className="workout-details">
        <h4> {workout.title} </h4> 
        <p>   <strong> Load(kg) :</strong> {workout.load}  </p>
        <p>   <strong> Reps :</strong> {workout.reps}  </p>
        <p>{workout.createdAt} </p> 
        <span onClick={handleClick}><DeleteIcon /></span>
        </div>
    )



       

    
}


export default WorkoutDetails;