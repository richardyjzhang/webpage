from fastapi import FastAPI
import pymysql
import config

app = FastAPI()

# MySQL 连接信息
conn = pymysql.connect(host=config.dbhost, user=config.dbuser, password=config.dbpass, db='website')
cursor = conn.cursor()

@app.get("/posts")
def fetchPosts():
    sql = 'SELECT p.id, p.title, p.description, u.name, p.createTime, p.imagePath FROM post p ' \
            '  LEFT JOIN web_user u ON p.authorId = u.id ORDER BY p.createTime DESC'
    cursor.execute(sql)
    rows = cursor.fetchall()

    results = []
    for row in rows:
        results.append({
            'id': row[0],
            'title': row[1],
            'description': row[2],
            'author': row[3],
            'createTime': row[4],
            'imagePath': row[5]
        })

    return results