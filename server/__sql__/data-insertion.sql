INSERT INTO tags (title)
VALUES ('Household Items'),
('Tools'),
('Electronics'),
('Sporting Goods'),
('Musical Instruments'),
('Garage Items'),
('Recreational Equipment');

INSERT INTO users (fullname, email, password)
VALUES
    ('darragh','darragh@yahoo.co.uk', 'pass1'),
    ('darragh example','darragh@live.co.uk', 'pass2')
;

INSERT INTO items (ownerid, title, imageurl, description)
VALUES (
        1,
        'Aeroplane toy',
        'https://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/ahMAAOSwKOJYI4k4/$_35.JPG?set_id=880000500F',
        'Nice view over the clouds'
    ),
    (
        1,
        'Television',
        'http://esla.ph/wp-content/uploads/2018/02/Sky-E2D-600x380.jpg',
        'HD Televison'
    ),
    (
        2,
        'Gaelic Football',
        'https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDEzXFxcLzA2XFxcL2JhbGxsaWdodHMuanBnXCIsXCJ3aWR0aFwiOjc2NyxcImhlaWdodFwiOjQzMSxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3LmpvZS5pZVxcXC9hc3NldHNcXFwvaW1hZ2VzXFxcL2pvZVxcXC9uby1pbWFnZS5wbmc_dj01XCJ9IiwiaGFzaCI6ImJmOTlhNjBkY2I4NzY4NTQ2MDJhOWU5MTY3ODE5ODlkYjEzZGE3YjUifQ==/balllights.jpg',
        'A real sport'
    ),
    (
        2,
        'Hammer',
        'https://cdn.axminster.co.uk/media/catalog/product/cache/1/image/920x/9df78eab33525d08d6e5fb8d27136e95/1/1/117835_xl.jpg',
        'Hit them nails down!'
    )
;

INSERT INTO itemtags (itemid, tagid)
VALUES (1,1),(1,3),(2,1),(2,3),(3,1),(3,4),(4,2),(4,6);
