-- We've written some already. Here are the queries we'll need to write:

-- Insert a user
INSERT into users(email, fullname, bio)
VALUES ('darraghmcalone@hotmail.co.uk', 'Darragh', 'App developer')

-- Insert a tag
INSERT into tags (title)

VALUES ('Kitchen Items');

-- Insert an item with tags

INSERT INTO items (title, imageurl, description)
VALUES (
        'Lawnmower',
        'https://www.google.co.uk/search?q=lawnmower&source=lnms&tbm=isch&sa=X&ved=0ahUKEwja1I2W463cAhUMDsAKHVcRArUQ_AUICygC&biw=1442&bih=694#imgrc=-szObNkHw5YvMM:',
        'Very quick Lawnmower, will cutt your grass at lightning speed!'
    );

WITH upd AS (
  UPDATE items SET tags = id WHERE id =
    (SELECT sales_person FROM accounts WHERE name = 'Acme Corporation')
    RETURNING *
)
INSERT INTO employees_log SELECT *, current_timestamp FROM upd;


-- Get a user with a given email

SELECT * from users
where email = 'example@red.com';

-- Get a user with a given ID
SELECT * from users
where id = 1;

-- Get all the items
SELECT * from items

-- Get all the items owned by a specific user (ID)
SELECT  items.title as Item, tags.title as Tag
FROM    items, itemtags, tags
WHERE   items.id = 4
AND     items.id = itemtags.itemid
AND     itemtags.tagid = tags.id
;



-- Get all the items for a specific user (ID) that are not borrowed
SELECT * from items
where items.borrowerid is null;

-- Get all the items borrowed by a given user (ID)
SELECT * from items
where items.borrowerid is 2;

UPDATE items
SET title='washing machine',description = 'example text', borrowerid=2
WHERE ID = 2;
-- Get all the tags
SELECT * from tags

-- Get all tags for a given item (ID)

SELECT  tags.title as Tag
FROM    items, itemtags, tags
WHERE   items.id = '2'
AND     itemtags.itemid = items.id
AND     tags.id = itemtags.tagid;

-- all items with their tags:
SELECT  items.title as Item, tags.title as Tag
FROM    items, itemtags, tags
WHERE   items.id = itemtags.itemid
AND     itemtags.tagid = tags.id
;

-- a specific item with its tags:
SELECT  items.title as Item, tags.title as Tag
FROM    items, itemtags, tags
WHERE   items.id = 4
AND     items.id = itemtags.itemid
AND     itemtags.tagid = tags.id
;
--- count all items in the database:
SELECT COUNT(*) FROM items;
-- how many tags, on average, items have:
SELECT COUNT(itemtags) / COUNT(items)
FROM itemtags, items;

-- all items sorted by most recently created
SELECT  items.title, items.created
FROM    items
ORDER BY items.created ASC;

