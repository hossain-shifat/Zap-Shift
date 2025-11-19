import React from 'react'

const SendParcel = () => {
    return (
        <div className="p-5 md:p-20 bg-base-100 rounded-2xl">
            <div className="pb-5">
                <h1 className="font-bold text-2xl md:text-4xl">Send A Parcel</h1>
            </div>
            <div>
                <div className="pb-5 border-b-2 border-base-200">
                    <h1 className="font-bold text-xl">Enter your parcel details</h1>
                </div>
               <div className="py-5">
                    <form>
                        <div className="space-y-4 border-b-2 pb-5 border-base-200">
                            {/* radio button */}
                            <div className="flex gap-3">
                                <div className="flex gap-2">
                                    <input type="radio" name="radio-6" className="radio radio-primary" defaultChecked />
                                    <label>Document</label>
                                </div>
                                <div className="flex gap-2">
                                    <input type="radio" name="radio-6" className="radio radio-primary" />
                                    <label>Not-Document</label>
                                </div>
                            </div>
                            {/* parcel input */}
                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="grid gap-2 w-full">
                                    <label>Parcel Name</label>
                                    <input type="text" placeholder="Parcel Name" className="input input-md w-full focus-within:outline-none" />
                                </div>
                                <div className="grid gap-2 w-full">
                                    <label>Parcel Weight (KG)</label>
                                    <input type="text" placeholder="Parcel Weight (KG)" className="input input-md w-full focus-within:outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5 py-5">
                            <div>
                                <div className="pb-2">
                                    <h1 className="font-bold text-lg">Sender Details</h1>
                                </div>
                                <div className="space-y-5">
                                    <div className="grid gap-2 w-full">
                                        <label>Sender Name</label>
                                        <input type="text" placeholder="Sender Name" className="input input-md w-full focus-within:outline-none" />
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Sender Address</label>
                                        <input type="text" placeholder="Sender Address" className="input input-md w-full focus-within:outline-none" />
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Sender Phone No</label>
                                        <input type="text" placeholder="Sender Phone No" className="input input-md w-full focus-within:outline-none" />
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Your District</label>
                                        <input type="text" className="input input-md focus-within:outline-none w-full" placeholder="Select your District" list="browsers" />
                                        <datalist id="browsers">
                                            <option value="Chrome"></option>
                                            <option value="Firefox"></option>
                                            <option value="Safari"></option>
                                            <option value="Opera"></option>
                                            <option value="Edge"></option>
                                        </datalist>
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Pickup Instruction</label>
                                        <textarea placeholder="Pickup Instruction" className="textarea textarea-md w-full focus-within:outline-none"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="pb-2">
                                    <h1 className="font-bold text-lg">Receiver Details</h1>
                                </div>
                                <div className="space-y-5">
                                    <div className="grid gap-2 w-full">
                                        <label>Receiver Name</label>
                                        <input type="text" placeholder="Receiver Name" className="input input-md w-full focus-within:outline-none" />
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Receiver Address</label>
                                        <input type="text" placeholder="Receiver Address" className="input input-md w-full focus-within:outline-none" />
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Receiver Contact No</label>
                                        <input type="text" placeholder="Receiver Contact No" className="input input-md w-full focus-within:outline-none" />
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Receiver District</label>
                                        <input type="text" className="input input-md focus-within:outline-none w-full" placeholder="Select receiver District" list="browsers" />
                                        <datalist id="browsers">
                                            <option value="Chrome"></option>
                                            <option value="Firefox"></option>
                                            <option value="Safari"></option>
                                            <option value="Opera"></option>
                                            <option value="Edge"></option>
                                        </datalist>
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Delivery Instruction</label>
                                        <textarea placeholder="Delivery Instruction" className="textarea textarea-md w-full focus-within:outline-none"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="py-5">
                                <h1>* PickUp Time 4pm-7pm Approx.</h1>
                            </div>
                            <div>
                                <button className="btn btn-primary font-bold text-black">Proceed to Confirm Booking</button>
                            </div>
                        </div>
                    </form>
               </div>
            </div>
        </div>
    )
}

export default SendParcel
