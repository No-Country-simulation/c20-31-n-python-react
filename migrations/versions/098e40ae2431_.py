"""empty message

Revision ID: 098e40ae2431
Revises: 41eb3327b5e0
Create Date: 2024-09-04 17:30:29.444526

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '098e40ae2431'
down_revision = '41eb3327b5e0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('doctor',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('dni', sa.String(length=50), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('address', sa.String(length=200), nullable=False),
    sa.Column('specialty', sa.String(length=30), nullable=False),
    sa.Column('number', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('dni'),
    sa.UniqueConstraint('email')
    )
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('password2')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('password2', sa.VARCHAR(length=80), autoincrement=False, nullable=False))

    op.drop_table('doctor')
    # ### end Alembic commands ###
