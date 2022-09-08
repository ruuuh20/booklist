// import React from 'react';
// import useInvite from './hooks/useInvite';

// export default function Main() {
//     const { inviteResponse, error, updating, updateRsvp } = useInvite();
//     if (error) {

//         return <div>{error}</div>
//     }
//     if (!inviteResponse) {
//         return React.createElement("div", { className: "spin", width: 200 });
//     }
//     function onRsvpChange(e) {
//         const purchasing = e.target.value === 'yes';
//         updateRsvp(purchasing);
//     }
// //     
// console.log(inviteResponse)
// return (
//     <>
//       <div className="relative h-full flex overflow-hidden overflow-y-auto">
//         <aside className="aside-left w-full md:w-[390px]">
//           <div className="main-menu relative">
//             <div className="mt-6 rounded-30 bg-white widget"><p>Title</p><p>blah blah</p>
//             </div>
//              <div className="mt-6 rounded-30 bg-white widget">Books</div>

//           <div className="mt-6 rounded-30 bg-white widget w-full text-gray-500"><p>If you have any questions, ask us anytime.</p>
//           <p className='text-sm'>(201) 123 - 4567</p>
//           <p className='text-sm'>info@peakeducenter.com</p>
//           <p className='text-sm'>317 Harrington Ave, Closter NJ</p>
//           </div>
//           </div>

         
//         </aside>
//         <main className='pl-4'>
//          <div><h1 className="">{inviteResponse.messages.title}</h1>
     

//       <div className="">
//         <h3>Hello, <strong>{inviteResponse.invite.name}</strong>!</h3>
//         <p>Welcome to {inviteResponse.invite.currentCourse}</p>
//         <p>The class meets on {inviteResponse.messages.meetings}</p>
//         <p>{inviteResponse.messages.invitation}</p>
//         <fieldset className="" disabled={updating}>
//           <legend>{inviteResponse.messages.question}</legend>

//           <label htmlFor="yes">
//             <input type="radio" id="yes" name="purchasing" value="yes" onChange={onRsvpChange} checked={inviteResponse.invite.purchasing === true}/>
//             {inviteResponse.messages.answer1}
//           </label>

//           <label htmlFor="no">
//             <input type="radio" id="no" name="purchasing" value="no" onChange={onRsvpChange} checked={inviteResponse.invite.purchasing === false}/>
//             {inviteResponse.messages.answer2}
//           </label>
//         </fieldset>
       
//       </div></div>
//         </main>
//       </div>
    
//     </>
// )
//     }