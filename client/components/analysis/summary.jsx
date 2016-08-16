/* eslint-disable max-len */
import React from "react";

const Summary = () => {
    return (
        <div className="container">
        <br/>
        <br/>
        <br/>
        <br/>
            <h4>Simulation Abstract</h4>
            <div>
						<div>

                            <p>Formula SAE simulation software utilizes a large majority of vehicle parameters to simulate a vehicle going around a track.  The software was shown to have as little as 5% difference between the real world competition values and the output results.  Extensive research and fundamental vehicle dynamics were used to program each individual section of the simulation.</p>

                            <h5>Introduction and Background</h5>
                            <p>Engineering principles and fundamental equations are generally used to describe real world phenomena.  At an engineering competition such as Formula SAE, every decision should be made with an engineering basis.  As the old saying goes, "Can't argue with numbers".</p>
                            <p>The simulation software provides an unbiased and objective way to make top and low level decisions that will directly influence how the team does at the Formula SAE competition.  The rules of the FSAE competition are fairly complex and general conversations such as "more power is better" or "less weight is better" can be avoided.  For instance, more power will reduce the overall lap time, however,  it might increase fuel consumption to the point that the team scores poorly in the fuel economy event.  How much time is gained versus the amount of extra fuel used, is something that engineers should look at very closely when making decisions.  Another factor such as weight can often times bring down lap time, however, there is a chance that it will make the vehicle less reliable and prone to disqualification from the dynamic events.  The tradeoffs must be closely evaluated to the team's overall goals at the competition.</p>
                            <p>Every successful FSAE school has some kind of vehicle simulation software that aids in the design process.  The degree of sophistication varies from school to school, but the underlying principle is the same, to do well at an engineering competition, the team needs to make engineering based decisions that provides hard facts as to which decision is more advantageous for the goals set.</p>

                            <h6>Vehicle Parameter Input</h6>
                            <p>The parameters input by the user will influence all of the internal programming code that will simulate the vehicle dynamics.  As an example, the engine choice will influence the transmission ratios and the number of gears that the simulation processes.  The wheelbase, track width, and center of gravity will influence the weight transfer and acceleration characteristics.  Over 155 individual variables are used within the main simulation function that describes the performance of the vehicle.</p>

                            <h6>Engine/Torque Curve</h6>
                            <p>There are 23 engine torque curves that were taken from dynamometer data at Formula Student Germany, 2008.  These torque curves correspond to different engine choices that each school used.  The simulation assumes no other engine data other than torque curve and engine used.  No information about forced induction, intake, or exhaust is known at this point.  The gear ratios for each engine are fixed into the program based on the engine selected.</p>

                            <h6>Aerodynamic Downforce</h6>
                            <p>The user inputs a downforce at a specified velocity(in the current program state this is 40 mph).  The program uses this value to get a quadratic function for downforce as a function of velocity.</p>

                            <h6>BSFC</h6>
                            <p>The brake specific fuel consumption is defined by the following equation:  BSFC=r/P.  Where the value "r" is the fuel consumption rate and "P" is the power produced(HP).  Sources reflect the typical BSFC for gasoline engines to be in the range of 0.45 and 0.37.  The software assumed a mean value of 0.41.  The BSFC value is in lb/hp*h, thus a calculation is made to convert the units of BSFC to seconds with the following equation:  BSFC=0.41/3600 </p>

                            <h6>Dynamic Event Track Layouts</h6>
                            <p>The software is programmed to the track map that was recorded at the 2011 FormulaSAE West competition(using a GPS tool).  The track is broken down into straight sections and constant radius corners.  The simulation alternates between a straight and series of corners.  For the 2007 map there are 17 straight sections that range from 16 feet to 440 feet.  The corners are characterized by radius and arc length.  The first corner following a straight is the brake-to-velocity.</p>

                            <h6>Tire Choices</h6>
                            <p>Four tire choices are given.  Tire model uses peak coefficient of friction from the tire data for each normal load, with no bias toward camber choice.  The simulation assumes this very simple model for now, and hopes to modify it later when there is more time and a need to have a non-dimensional model.  Camber and slip angle is not taken into account for cornering at this point.  The simulation only looks at peak potential.  There is also a correction factor that is used to correlate the raw tire data to data that would be found on an asphalt surface.  The correction factor can be changed for a concrete surface.  The lowest coefficient of friction is 0.8 which is a flat line number that happens after the 4th order polynomial equation ends at 2000lbs.  This is only to make the data reasonable for extremely high numbers, and it is an arbitrary value for our purposes.</p>

                            <h6>Gearing and Gear Ratios</h6>
                            <p>Six velocity factors(or five) are computed based on user input to model acceleration and shifting. For example:  Velocity Factor One=First Gear Ratio*Primary Drive Ratio*Final Drive Ratio*Tire Radius.  This gives a relationship between vehicle velocity and engine RPM for each gear in the transmission. </p>

                            <h6>Launching</h6>
                            <p>Every dynamic event simulation has a launch sequence except for the skidpad.  For the first 0.5 seconds, the weight on the tire is figured, followed by the instantaneous coefficient of friction of the tire from the tire data.  That corresponding calculation is used to find the acceleration of the car.  Every 0.01 seconds, the weight transfer, weight on the tire, and instantaneous coefficient of friction are recalculated to a find the new longitudinal acceleration.  The launch distance (distance traveled in 0.5 seconds and final velocity are recorded) is used in calculation and formulation of concurrent events.</p>
                            <p>After 0.5 seconds, while below 15 mph, the instantaneous torque is calculated based on current engine rpm and linear interpolation on the engine torque curve.  This provides the torque that is used in the longitudinal acceleration of the vehicle.  The downforce is then used to find added weight on the tires based on the vehicle speed.  Tire rolling resistance is found using equations from Gillespie, and the total weight on the tires is the downforce plus the vehicle weight.  Drag force is calculated using density of air, vehicle velocity, coefficient of drag, frontal area, the downforce, and the lift/drag coefficient.</p>
                            <p>Instantaneous longitudinal acceleration is the force available from the engine, subtracted from the rolling resistance and drag.  If it is below 0, which happens when the rolling resistance and drag are  greater what the engine can power, the longitudinal acceleration is set at a minimum 0f 0.5 ft/s2.  The maximum tractive force is computed and compared to the instantaneous longitudinal acceleration, if it is below the instantaneous longitudinal acceleration, the vehicle takes on the value of the maximum tractive force.  The counter within the maximum tractive force calculation keeps track of how often the vehicle is at wide open throttle.  If the vehicle is accelerating at the traction limits and not the engine limits, the counter takes this time as the traction limited period.</p>
                            <p>Distance is found for the current iteration using starting velocity and the current instantaneous acceleration coupled with the iteration time constant.  This finds the new velocity at the end of iteration.  Engine rpm is found at the end of each iteration to then find the new available torque.  This iteration process continues until 15mph.  Once the launch section is complete, the total time to reach 15mph and the distance is recorded for future calculation.</p>

                            <h6>Acceleration</h6>
                            <p>The acceleration event is started by first calculating the distance the vehicle must travel.  The distance of the acceleration event as outlined in the rules is 75 meters, which converts to 246.06 feet.  The same launching iteration is used as previously specified.  After 15mph, the program checks if rpm is greater than shift rpm, and if velocity factor is greater than the other velocity factors.  If it is, then a new velocity factor is used to find the new rpm based on the known velocity.  This trigger then shifts the model to the next gear.  The total number of shifts are recorded.  This process repeats until 246.06 feet is reached.  The velocity at the end of the 246.06 feet is recorded and is labeled as the output for the trap speed of the vehicle.  The program converts the value into mph from ft/s.  The total acceleration time is the launch time plus the time to reach 246.06 feet.</p>

                            <h6>Cornering for Autocross, Endurance and Skidpad</h6>
                            <p>Cornering is found assuming steady state, no acceleration or deceleration, and steady state transfer.  The simulation assumes a starting cornering acceleration of 1g.  The downforce on each tire is 0.25 of total user input.  The program finds the weight distribution with weight transfer based on the assumed cornering acceleration (1g).  If the total weight plus the distribution is greater than the total car weight, then the tire weight is equal to the vehicle weight(if the assumed cornering is enough to tip the car on two wheels, the weight on the two wheels is equal to the car weight).  The front axle weight transfer is calculated separate from the rear axle weight transfer so that the weight distribution can be modified and have an effect on cornering.  The weight on each tire is then used with tire data to find instant coefficient of friction for each tire. <br/><br />Cornering Force on the Tire=Instantaenous Coefficient of Friction*Weight on Tire</p>
                            <p>This is repeated and then summed for all four tires.  This gives the new cornering force.  The cornering acceleration is given as follows:  Cornering Accel= CorneringForce/(VehicleWeight/g)</p>
                            <p>This new cornering acceleration is iterated with the weight distribution again, and new tire weights with corresponding coefficient of friction for a new cornering force.  This iterates until difference between starting and finishing cornering acceleration is less than 1% and at least 10 iterations have been performed.  Once the conditions of the iteration are complete, the final cornering lateral acceleration is recorded.</p>
                            <p>Cornering time is then a function of cornering acceleration, corner radius and arc length.  The corners are assumed to be constant radius corners and have a maximum velocity around the corner with the given lateral acceleration.  With the given velocity and arc length, the time is easily calculated.</p>

                            <h6>Skidpad</h6>
                            <p>The skidpad inner and outer circles are specified in the rules as 50.03 feet and 69.73 feet.  The middle distance where the car would travel is then estimated to be 59.875 feet with a radius of 29.93 feet.  This is the cornering radius that is used in the simulation.  The circumference of the circle gives us the arc length and will be used to determine the total time for the skidpad event.</p>

                            <h6>Braking</h6>
                            <p>Braking is assumed to be a constant 1.5 Gs.  This is a work in progress and will be subject to many updates.</p>

                            <h6>Autocross</h6>
                            <p>The first section of the course (straight) is the distance given minus the distance for launch portion.   The final velocity at the end of the straight is the cornering velocity that that corner can be taken at, based on the calculations that were conducted for cornering.  The straight section calculation  first assumes that the vehicle accelerates for the whole straight section, until the point of the next section (corner).  Then the braking point for that section is found, using a curve fit of the velocity versus distance trace for the straight section.  Elaborate methods for the curve fit are done including use of Vander monde matrices, Gram Schmidt and QR Decomposition(This will be later attached in the table of contents).  Using the final velocity (cornering velocity at the end of the straight) and the constant braking deceleration, an intersection point between the braking curve and the acceleration curve is found.  The distance at this intersection is the point on the straight that the model needs to brake at to get to the cornering speed.  The total time for acceleration and deceleration for the straight section are recorded.  This is done for all the straight sections, with the starting velocity being the cornering velocity of the corner preceding the straight section.</p>
                            <p>The total longitudinal acceleration is recorded for all of the straight sections in order to calculate a mean value at the end of the simulation.  Traction limited acceleration time is recorded as well as wide open throttle time and the total number of shifts.  Autocross total time is total straight section time plus cornering time plus the launching time.  Instantaneous velocity is recorded for each straight section(per iteration) and averaged at the end to output the average autocross velocity.</p>
                            <p>If the corner that the vehicle is approaching, has a higher velocity that it can achieve while accelerating, the cornering velocity is the average between the velocity at the end of the straight and the calculated maximum cornering velocity.</p>

                            <h6>Endurance</h6>
                            <p>The endurance event, as outlined in the rules is 13.66 miles long.  The total distance of the 2011 track map is then analyzed at 0.733 miles.  To achieve the 13.66 mile long endurance track, it is estimated that there are 18.61686 laps that the program must simulate.  The total endurance time is recorded as:
                            <br /><code>Total Endurance Time = Autocross Time * 18.6168</code>
                            <br />A similar calculation is done for the total number of shifts.</p>

                            <h6>Fuel Consumption</h6>
                            <p>The instantaneous horsepower at each point of the straight sections was recorded.  The average horsepower is calculated based and recorded to be used in the fuel consumption equation as follows:
                            <br /><code>Fuel Consumption Rate = BSFC * AverageHP</code>
                            <br />The total fuel used in gallons is then calculated as:
                            <br /><code>Total Fuel Used = Fuel Consumption Rate * Total Endurance Time</code></p>

                            <h5>References</h5>
                            <p>Gillespie, Thomas.  Fundamentals of Vehicle Dynamics.  Society of Automotive Engineers. (1992)
                            <br />Pearson, Geoff.  Reasoning Your Way through the FSAE Design Process.(2011)<br /><a href="http://fsae.com/eve/forums/a/tpc/f/125607348/m/217101453">Forum Link</a><br />
                            CSUN Formula SAE Official Team Website. 2012<br /><a href="http://http://www.ecs.csun.edu/sae/index.html">CSUN FSAE Website</a></p>


							</div>
						</div>
					</div>
    );
};

export default Summary;