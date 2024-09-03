import CheifCard from "./CheifCard"
export default function CheifSection(){
    const cheifs = [
        {
            name:"Juan Carlos",
            img:"/img/top-cheifs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name:"John Doe",
            img:"/img/top-cheifs/img_2.jpg",
            recipesCount: "05",
            cuisine: "Japanese", 
        },
        {
            name:"Erich Maria",
            img:"/img/top-cheifs/img_3.jpg",
            recipesCount: "13",
            cuisine: "Italian"
        },
        {
            name:"Chris Brown",
            img:"/img/top-cheifs/img_4.jpg",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name:"Blake Lively",
            img:"/img/top-cheifs/img_5.jpg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name:"Ben Affleck",
            img:"/img/top-cheifs/img_6.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        }

    ]
   
    return (
        <div className="section cheifs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-cheifs-container">
                {/* <CheifCard />
                <CheifCard />
                <CheifCard />
                <CheifCard />
                <CheifCard />
                <CheifCard /> */}
                { cheifs.map(cheif => <CheifCard key={cheif.name} cheif={cheif} />) }
            </div>
        </div>
    )
}