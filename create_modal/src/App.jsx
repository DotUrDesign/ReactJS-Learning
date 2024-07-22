import React from "react";
import Modal from "./Modal";
import { useState } from "react";
export default function App() {
    const [open, setOpen] = useState(false);
 
    const handleClose = () => {
        console.log("Modal closed");
        setOpen(false);
    };
 
    const handleOpen = () => {
      console.log("Modal opened");
        setOpen(true);
    };
 
    return (
        <div
            style={{
                textAlign: "center",
                display: "block",
                padding: 30,
                margin: "auto",
            }}
        >
            <h1 style={{ color: "green" }}>
                GeeksforGeeks
            </h1>
            <h4>Modal Component in ReactJS?</h4>
            <button type="button" onClick={handleOpen}>
                Click Me to Open Modal
            </button>
            <Modal isOpen={open} onClose={handleClose}>
                <>
                    <h1>GFG</h1>
                    <h3>A computer science portal!</h3>
                </>
            </Modal>
        </div>
    );
}